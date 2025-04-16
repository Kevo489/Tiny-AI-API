/**
 * Checks the type of a given object or returns its type as a string.
 *
 * If a `type` string is provided, the function will return a boolean indicating
 * whether the object's internal [[Class]] matches the given type (case-sensitive).
 *
 * If no `type` is provided, it will return the object's internal type string
 * (e.g., `"array"`, `"object"`, `"string"`, etc.).
 *
 * @param {*} obj - The object or value to check or retrieve the type of.
 * @param {string} [type] - (Optional) The expected type to check against (e.g., `"Array"`, `"Object"`, `"String"`).
 * @returns {boolean|string|null} Returns:
 * - `true` if the object matches the given type,
 * - `false` if it doesn't match the type,
 * - the lowercase string name of the object's type if `type` is not provided,
 * - `null` if the object is `undefined`.
 *
 * @example
 * objType([], 'Array'); // true
 * objType({}, 'Array'); // false
 * objType('hello'); // 'string'
 * objType(undefined); // null
 */
export function objType(obj, type) {
  // Is Defined
  if (typeof obj !== 'undefined') {
    // Check Obj Type
    if (typeof type === 'string') {
      if (Object.prototype.toString.call(obj).toLowerCase() === `[object ${type}]`) {
        return true;
      }

      return false;
    }

    // Get Obj Type

    // Result
    const result = Object.prototype.toString.call(obj).toLowerCase();

    // Send Result
    return result.substring(8, result.length - 1);
  }

  // Nope
  return null;
}
