export class ArrayUtils {

  public static swapElements<T>(array: Array<T>, index1: number, index2: number): Array<T> {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
      return array;
    }

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
  }

  public static shuffle<T>(array: Array<T>): Array<T> {
    let count = array.length;
    while (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      ArrayUtils.swapElements(array, randomIndex, --count);
    }

    return array;
  }
}
