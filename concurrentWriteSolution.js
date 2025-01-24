```javascript
// concurrentWriteSolution.js

firebase.database().ref('myData').transaction(function(currentData) {
  if (currentData === null) {
    return { value: 1 }; // Initial value
  } else {
    return { value: currentData + 1 }; // Increment
  }
});
```