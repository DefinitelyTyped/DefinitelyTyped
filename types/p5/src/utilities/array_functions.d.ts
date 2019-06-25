// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Adds a value to the end of an array. Extends the
     *   length of the array by one. Maps to Array.push().
     *   @param array Array to append
     *   @param value to be added to the Array
     *   @return the array that was appended to
     */
    append(
      array: any[],
      value: any
    ): any[];

    /**
     *   Copies an array (or part of an array) to another
     *   array. The src array is copied to the dst array,
     *   beginning at the position specified by srcPosition
     *   and into the position specified by dstPosition.
     *   The number of elements to copy is determined by
     *   length. Note that copying values overwrites
     *   existing values in the destination array. To
     *   append values instead of overwriting them, use
     *   concat().  The simplified version with only two
     *   arguments, arrayCopy(src, dst), copies an entire
     *   array to another of the same size. It is
     *   equivalent to arrayCopy(src, 0, dst, 0,
     *   src.length).
     *
     *
     *   Using this function is far more efficient for
     *   copying array data than iterating through a for()
     *   loop and copying each element individually.
     *   @param src the source Array
     *   @param srcPosition starting position in the source
     *   Array
     *   @param dst the destination Array
     *   @param dstPosition starting position in the
     *   destination Array
     *   @param length number of Array elements to be
     *   copied
     */
    arrayCopy(
      src: any[],
      srcPosition: number,
      dst: any[],
      dstPosition: number,
      length: number
    ): void;

    /**
     *   Copies an array (or part of an array) to another
     *   array. The src array is copied to the dst array,
     *   beginning at the position specified by srcPosition
     *   and into the position specified by dstPosition.
     *   The number of elements to copy is determined by
     *   length. Note that copying values overwrites
     *   existing values in the destination array. To
     *   append values instead of overwriting them, use
     *   concat().  The simplified version with only two
     *   arguments, arrayCopy(src, dst), copies an entire
     *   array to another of the same size. It is
     *   equivalent to arrayCopy(src, 0, dst, 0,
     *   src.length).
     *
     *
     *   Using this function is far more efficient for
     *   copying array data than iterating through a for()
     *   loop and copying each element individually.
     *   @param src the source Array
     *   @param dst the destination Array
     *   @param [length] number of Array elements to be
     *   copied
     */
    arrayCopy(
      src: any[],
      dst: any[],
      length?: number
    ): void;

    /**
     *   Concatenates two arrays, maps to Array.concat().
     *   Does not modify the input arrays.
     *   @param a first Array to concatenate
     *   @param b second Array to concatenate
     *   @return concatenated array
     */
    concat(
      a: any[],
      b: any[]
    ): any[];

    /**
     *   Reverses the order of an array, maps to
     *   Array.reverse()
     *   @param list Array to reverse
     *   @return the reversed list
     */
    reverse(
      list: any[]
    ): any[];

    /**
     *   Decreases an array by one element and returns the
     *   shortened array, maps to Array.pop().
     *   @param list Array to shorten
     *   @return shortened Array
     */
    shorten(
      list: any[]
    ): any[];

    /**
     *   Randomizes the order of the elements of an array.
     *   Implements  Fisher-Yates Shuffle Algorithm.
     *   @param array Array to shuffle
     *   @param [bool] modify passed array
     *   @return shuffled Array
     */
    shuffle(
      array: any[],
      bool?: boolean
    ): any[];

    /**
     *   Sorts an array of numbers from smallest to
     *   largest, or puts an array of words in alphabetical
     *   order. The original array is not modified; a
     *   re-ordered array is returned. The count parameter
     *   states the number of elements to sort. For
     *   example, if there are 12 elements in an array and
     *   count is set to 5, only the first 5 elements in
     *   the array will be sorted.
     *   @param list Array to sort
     *   @param [count] number of elements to sort,
     *   starting from 0
     *   @return the sorted list
     */
    sort(
      list: any[],
      count?: number
    ): any[];

    /**
     *   Inserts a value or an array of values into an
     *   existing array. The first parameter specifies the
     *   initial array to be modified, and the second
     *   parameter defines the data to be inserted. The
     *   third parameter is an index value which specifies
     *   the array position from which to insert data.
     *   (Remember that array index numbering starts at
     *   zero, so the first position is 0, the second
     *   position is 1, and so on.)
     *   @param list Array to splice into
     *   @param value value to be spliced in
     *   @param position in the array from which to insert
     *   data
     *   @return the list
     */
    splice(
      list: any[],
      value: any,
      position: number
    ): any[];

    /**
     *   Extracts an array of elements from an existing
     *   array. The list parameter defines the array from
     *   which the elements will be copied, and the start
     *   and count parameters specify which elements to
     *   extract. If no count is given, elements will be
     *   extracted from the start to the end of the array.
     *   When specifying the start, remember that the first
     *   array element is 0. This function does not change
     *   the source array.
     *   @param list Array to extract from
     *   @param start position to begin
     *   @param [count] number of values to extract
     *   @return Array of extracted elements
     */
    subset(
      list: any[],
      start: number,
      count?: number
    ): any[];
  }
}
