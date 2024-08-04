## Homework 03 - Streams

### 1. Basic Stream Operations
Task: Write a simple Node.js script using the `fs` module to read a text file and write it to another text file using streams.(Do this with and without pipes)

### 2. Transform Streams Homework
Task: Create a Node.js script that uses a transform stream to handle JSON objects, modifying each one by adding a new property timestamp and converting it back into a string before writing it to an output file.

### 3. Implementing Basic Back Pressure

Task: Implement a readable and a writable stream where the writable stream deliberately writes data slower than the readable reads it, demonstrating how back pressure is managed.

### 4. HTTP Streaming

Task: Create an HTTP server using the `http` module that streams a large file to the client upon request instead of loading it into memory all at once.
### 5. Real-time Data Processing(Optional)

Task: Create a small application using `socket.io` that streams real-time data between a server and client, showcasing the use of duplex streams.
(For frontend use simple HTML file, to import socket use     <script src="/socket.io/socket.io.js"></script>)