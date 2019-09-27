const fn = (level: string, name: string, timestamp?: string) => {
  const ts = timestamp ? timestamp : new Date().toUTCString();
  level = level.toUpperCase();
  return `[${ts}] (${name}) ${level}:`;
};
export default (label: string) => {
  return {
    info: (...args: any[]) => console.info(fn("info", label), ...args),
    debug: (...args: any[]) => console.debug(fn("debug", label), ...args),
    warn: (...args: any[]) => console.warn(fn("warn", label), ...args),
    error: (...args: any[]) => console.error(fn("error", label), ...args)
  };
};
