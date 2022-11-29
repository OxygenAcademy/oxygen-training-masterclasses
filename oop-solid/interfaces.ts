interface Equine {
  run(): void;
  // ...
}

interface Speaking {
  speak(): void;
  // ...
}

class Unicorn implements Equine {
  constructor() {
    // ...
  }

  run(): void {
    // ...
  }
}

class Centaure implements Equine, Speaking {
  constructor() {
    // ...
  }

  run(): void {
    // ...
  }

  speak(): void {
    // ...
  }
}