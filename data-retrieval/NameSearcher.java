import java.io.*;
import java.util.*;
public class NameSearcher {
    public static void main(String[] args) throws Exception {
        BufferedReader r = new BufferedReader(new FileReader("data.tsv"));
        String line;
        while ((line = r.readLine()) != null) {
            System.out.println(line);
        }
    }
}