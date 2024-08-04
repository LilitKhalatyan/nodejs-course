// Task: Implement a readable and a writable stream where the writable stream deliberately writes data
// slower than the readable reads it, demonstrating how back pressure is managed.

const { Readable, Writable } = require('stream');

const readableStream = new Readable({
  read(size) {
    for (let i = 0; i < 5; i++) {
      const chunk = `Chunk ${this.chunkCount++}`;
      console.log(`Pushing: ${chunk}`);
      this.push(chunk);
    }
    this.push(null);
  },
});

readableStream.chunkCount = 1;

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk.toString()}`);
    setTimeout(callback, 1000);
  },
});

readableStream.pipe(writableStream);
