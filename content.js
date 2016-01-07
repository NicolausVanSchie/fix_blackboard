try {
        // find the link on the page, not the best way probably to do this
        var link = document.getElementsByClassName("brandingImgWrap")[0].getElementsByTagName('a')[0];
        // Change the url to bb home
        link.setAttribute('href', 'https://learn.uq.edu.au');
        // Make it so it does not open a new window
        link.removeAttribute('target');
}
catch(err) {} //we don't really care, as not all bb sites have the link
