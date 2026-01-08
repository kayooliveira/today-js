/**
 * Returns the current date as a string in YYYY-MM-DD format.
 * The date is statically determined at the time of the package's daily release.
 * 
 * @returns The current date string (e.g., "2026-01-08")
 * 
 * @example
 * import today = require('@kayooliveira/today-js');
 * const date = today();
 * console.log(date); // "2026-01-08"
 */
declare function today(): string;

export = today;
