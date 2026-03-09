import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function createAnalytics(user) {
  let session = null;

  function startSession() {
    session = {
      uid: user.uid,
      startedAt: Date.now(),
      endedAt: null,
      durationMs: null,
      attempts: 0,
      success: false,
      logs: []
    };

    log("session_started");
  }

  function log(type, data = {}) {
    if (!session) return;

    session.logs.push({
      type,
      timestamp: Date.now(),
      ...data
    });
  }

  function addAttempt(program = null) {
    if (!session) return;

    session.attempts += 1;

    log("attempt_started", {
      attemptNumber: session.attempts,
      program
    });
  }

  async function finishSession(success = false) {
    if (!session) return;

    session.endedAt = Date.now();
    session.durationMs = session.endedAt - session.startedAt;
    session.success = success;

    log("session_finished", {
      success,
      durationMs: session.durationMs
    });

    await addDoc(collection(db, "sessions"), {
      ...session,
      createdAt: serverTimestamp()
    });

    console.log("Sesión guardada en Firestore");
  }

  function getSession() {
    return session;
  }

  return {
    startSession,
    log,
    addAttempt,
    finishSession,
    getSession
  };
}