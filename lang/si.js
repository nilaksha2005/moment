// moment.js language configuration
// language : Sinhalese (si)
// author : Nilaksha Rathnayake : https://github.com/nilaksha2005

(function (factory) {
    factory(moment);
}(function (moment) {
    return moment.lang('si', {
        months : "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝම්බර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort : "ජන_පෙබ_මාර්_අප්‍රේ_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays : "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort : "ඉරි_සඳු_අඟ_බදා_බ්‍රහස්_සිකු_සෙන".split("_"),
        weekdaysMin : "ඉරි_සඳු_අඟ_බදා_බ්‍රහස්_සිකු_සෙන".split("_"),
        longDateFormat : {
            LT : "hh:mm",
            L : "DD/MM/YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd, D MMMM YYYY LT"
        },
        calendar : {
            sameDay : '[අද] A LT [ට]',
            nextDay : '[හෙට] A LT [ට]',
            nextWeek : '[ලබන] dddd A LT [ට]',
            lastDay : '[ඊයේ] A LT [ට]',
            lastWeek : '[පසුගිය] dddd A LT [ට]',
            sameElse : 'L'
        },
        relativeTime : {
            future : "%s කින්",
            past : "%s කට පෙර",
            s : "තත්පර කිහිපයක්",
            m : "මිනිත්තුව",
            mm : "මිනිත්තු %d",
            h : "පැයක",
            hh : "පැය %d",
            d : "දිනය",
            dd : "දින %d",
            M : "මාසය",
            MM : "මාස %d",
            y : "අවුරුද්ද",
            yy : "අවුරුදු %d"
        },
        ordinal : "වෙනි",
		meridiem : function (hour, minute, isLower) {
            if (hour >= 6 && hour < 12) {
                return "පෙ.ව.";
            } else   if (hour >= 12 && hour < 13) {
                return "මධ්‍යහන";
            } else    if (hour >= 13 && hour <= 18) {
                return "ප.ව.";
            } else   if (hour >= 18 && hour <= 11) {
                return "රාත්‍රී";
            } else  if (hour >= 0 && hour <= 6) {
                return "අළුයම";
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
