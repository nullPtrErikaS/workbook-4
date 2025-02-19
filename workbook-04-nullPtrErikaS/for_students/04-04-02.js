/**
 * 04-04-02.js - a simple JavaScript file that gets loaded with
 * page 4 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020
 *
 */

// @ts-check
/* jshint -W069, esversion:6 */

import * as utilities from "./04-04-utilities.js";

/**
 * TwoDots - a function for the student to write
 * Notice that it gets the two points and the context as arguments
 * This function should apply a transformation
 *
 * You must write this function using transform.
 * There should not be any rotate, translate or scale function calls.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
function twoDots(context, x1, y1, x2, y2) {
    // Calculate the distance between the two points
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculate the angle between the two points
    const angle = Math.atan2(dy, dx);

    // Calculate the scale factor
    const scale = distance / 10; // Since the original square is 10 units wide

    // Calculate the transformation matrix components
    const a = scale * Math.cos(angle);
    const b = scale * Math.sin(angle);
    const c = -scale * Math.sin(angle);
    const d = scale * Math.cos(angle);
    const e = x1;
    const f = y1;

    // Apply the transformation
    context.transform(a, b, c, d, e, f);
}

// setup and start the program
utilities.setup("canvas1", twoDots, "black");

