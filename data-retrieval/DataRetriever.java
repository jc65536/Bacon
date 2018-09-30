import java.io.*;
import java.util.*;
import java.net.*;
import java.util.zip.*;
public class DataRetriever {
    public static void main(String[] args) throws Exception {
        URL nameDBUrl = new URL("https://datasets.imdbws.com/name.basics.tsv.gz");
        BufferedReader r = new BufferedReader(new InputStreamReader(new GZIPInputStream(nameDBUrl.openStream())));
        String line;
        for (int a = 0; a < 10; a++) {
            line = r.readLine();
            System.out.println(line);
        }
    }
}