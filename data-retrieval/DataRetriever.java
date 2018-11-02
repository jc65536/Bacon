import java.io.*;
import java.util.*;
import java.net.*;
import java.util.zip.*;
public class DataRetriever {
    URL DBUrl;
    BufferedReader reader;
    String line;
    String[] segments;

    public DataRetriever(String url) throws Exception {
        DBUrl = new URL(url);
        reader = new BufferedReader(new InputStreamReader(new GZIPInputStream(DBUrl.openStream())));
        line = reader.readLine();
    }
    
    public boolean nextLine() throws Exception {
        String tempLine;
        if ((tempLine = reader.readLine()) != null) {
            line = tempLine;
            segments = line.split("\t");
            return true;
        } else {
            line = null;
            segments = null;
            return false;
        }
    }
}