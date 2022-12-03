package advent_code;


import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;

public class DayOne {

    public static void main(String[] args) throws IOException {
        String content = null ;
        String[] tabContent = null ;
        long caloriesMax = 0 ;
        long calories2Max = 0 ;
        long calories3Max = 0 ;
        String path = "C:\\Users\\Maxime P\\Desktop\\input";
        try {
            // default StandardCharsets.UTF_8
            content = Files.readString(Paths.get(path));
            tabContent = content.split("\n\n") ;

        } catch (IOException e) {
            e.printStackTrace();
        }

        ArrayList<Long> tabElfs = new ArrayList<>() ;
        for (String element : tabContent) {
            String[] elfCal = element.split("\n") ;
            long calories = 0 ;
            for (String eflCalString : elfCal) {
                 calories += Long.parseLong(eflCalString) ;
            }
            tabElfs.add(calories) ;
        }

        Collections.sort(tabElfs);
        Long elf3 = tabElfs.get(tabElfs.size()-3) ;
        Long elf2 = tabElfs.get(tabElfs.size()-2) ;
        Long elf1 = tabElfs.get(tabElfs.size()-1) ;
        Long total = elf3 + elf2 + elf1 ;
        System.out.println("Au total les 3 elfs détiennent " + total.toString() + " calories");

    }
}
