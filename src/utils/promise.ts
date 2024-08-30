export const sleep = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const poll = (promiseFn: Function, duration: number) =>
  promiseFn().then(sleep(duration).then(() => poll(promiseFn, duration)));
