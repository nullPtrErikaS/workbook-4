/**
 * 04-04-01.js - a simple JavaScript file that gets loaded with
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
 * You must write this function using rotate, translate and scale
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
function twoDots(context, x1, y1, x2, y2) {
    // Translate to the first point
    context.translate(x1, y1);

    // Calculate the distance between the two points
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculate the angle between the two points
    const angle = Math.atan2(dy, dx);

    // Rotate to align with the second point
    context.rotate(angle);

    // Scale to match the distance between the points
    const scale = distance / 10; // Since the original square is 10 units wide
    context.scale(scale, scale);
}

utilities.setup("canvas1", twoDots, "black");


