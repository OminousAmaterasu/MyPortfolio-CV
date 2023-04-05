/**
 * getAge() - calculates age between given data and current date
 */


(function () {
    "use strict";

    window.addEventListener('load', () => {
        //document.getElementById("yearsEducator").innerHTML = getAge("2014/06/23");
        document.getElementById("age").innerHTML = getAge("2001/07/16");
    });

    /**
     * Function gets called when page is loaded.
     */
    function getAge(dateParam) {
        const today = new Date();
        const birthDate = new Date(dateParam);
        const m = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age
    }

})();
