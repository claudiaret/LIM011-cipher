window.cipher = {
  encode:function cifrando(off1, cifrar) {
    let asciiC;
      let newCifra = "";
      let unew;
      for ( let i=0; i<cifrar.length; i++ ) {
        asciiC = cifrar.charCodeAt(i);
        if ( asciiC >= 65 && asciiC <= 90)
        { unew = (( asciiC - 65 + off1 ) % 26) + 65;}
        if ( asciiC >= 97 && asciiC <= 122)
        { unew= (( asciiC - 97 + off1) %26) + 97;}

        newCifra += String.fromCharCode(unew);
      }
      return newCifra;
    },
  decode: function descifrando(off2, descifrar) {
    let asciiD;
      let newDescifra = "";
      let ucifra;
      for ( let i=0; i<descifrar.length; i++ ) {
        asciiD = descifrar.charCodeAt(i);
        if ( asciiD >= 65 && asciiD <= 90) {
           ucifra = (( asciiD - 90 - off2 ) % 26) + 90;}
        if ( asciiD >= 97 && asciiD <= 122) {
              ucifra = (( asciiD - 122 - off2 ) % 26) + 122;}
       newDescifra += String.fromCharCode(ucifra);
      }
      return newDescifra;},
    };
