/**
 * Object 1
 * 8
 * 1846
 */


 /**
  * Object 2
  * it should be an object
  * {yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659}
  */

  /**
   * Object 3
   * Your name is Alejandro and you like purple
   * Your name is Melissa and you like green
   * Your name is undefined and you like ***green*** here I make mistake
   */

   /**
    * Array 1
    * "Maya"
    * "Marisa"
    * "Chi"
    */

    /**
     * Array 2
     * "Raindrops on roses"
     * "whiskers on kittens"
     * ["Bright copper kettles",
        "warm woolen mittens",
        "Brown paper packages tied up with strings"]
     */

     /**
      * Array 3
      * [10,30,20]
      */

      /**Refactoring
       * dont missing the const or let or var
       */
      var obj = {
        numbers: {
          a: 1,
          b: 2
        }
      };

     const {a,b} = obj.numbers;
/** ES5 Array Swap
 * you should directly get the value ,not the index.
 */

[arr[0], arr[1]] = [arr[1], arr[0]]

 /** raceResults()
  * Don't forget the () out of the object curly braces
  */
 const raceResults = ([first,second,third,...rest]) => ({first,second,third,rest})