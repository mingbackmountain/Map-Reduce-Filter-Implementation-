import java.util.ArrayList;
import java.util.Arrays;
import java.util.function.BiFunction;
import java.util.function.Function;

class Solution {

    public static ArrayList<Integer> myMap(ArrayList<Integer> inputArray, Function<Integer, Integer> func) {
        ArrayList arr = new ArrayList<Integer>();

        for (int i = 0; i < inputArray.size(); i++) {
            arr.add(func.apply(inputArray.get(i)));
        }

        return arr;
    }

    public static ArrayList<Integer> myFilter(ArrayList<Integer> inputArray, Function<Integer, Boolean> func) {
        ArrayList arr = new ArrayList<Integer>();

        for (int i = 0; i < inputArray.size(); i++) {
            if (func.apply(inputArray.get(i))) {
                arr.add(inputArray.get(i));
            }
        }

        return arr;
    }

    public static int myReduce(ArrayList<Integer> inputArray, BiFunction<Integer, Integer, Integer> func) {
        int accumulator = 0;

        for (int i = 0; i < inputArray.size(); i++) {
            accumulator = func.apply(accumulator, inputArray.get(i));
        }

        return accumulator;
    }

    public static void main(String[] args) {

        ArrayList a = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

        Function<Integer, Integer> increaseByOne = e -> e + 1;
        Function<Integer, Boolean> oddNumber = e -> e % 2 != 0;
        BiFunction<Integer, Integer, Integer> add = (x, y) -> (x + y);

        System.out.println(myMap(a, increaseByOne).toString());
        System.out.println(myFilter(a, oddNumber).toString());
        System.out.println(myReduce(a, add));
    }
}
