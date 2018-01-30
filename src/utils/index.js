import uuid from "uuid";

/**
 * Generate array with mock values.
 *
 * @param amount number of values in array.
 */
export function generateValues(amount = 15) {
    return [...new Array(amount)]
        .map(() => uuid());
}