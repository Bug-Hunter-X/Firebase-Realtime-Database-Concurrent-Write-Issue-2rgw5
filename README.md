# Firebase Realtime Database Concurrent Write Issue

This repository demonstrates a common issue encountered when using Firebase Realtime Database and multiple clients attempting to write data concurrently. The issue is exacerbated by the use of the `on('value', ...)` listener which is susceptible to overwriting more recent data with older data in an asynchronous context.

The `concurrentWriteBug.js` file shows the problematic code, leading to data loss.  The `concurrentWriteSolution.js` file provides a solution using Firebase transactions to ensure atomic operations and data consistency.