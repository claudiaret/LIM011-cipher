window.cipher = {
  encode:function cifrando(off1, cifrar) {
    let ascii;
      let newCifra = "";
      let unew;
      for ( let i=0; i<cifrar.length; i++ ) {
        ascii = cifrar.charCodeAt(i);
        if ( ascii >= 65 && ascii <= 90) {
           unew = (( ascii - 65 + off1 ) % 26) + 65;}
        newCifra += String.fromCharCode(unew);
      }
      return newCifra;
    },
  decode: function descifrando(off2,descifrar) {
    let asciiD;
      let newDescifra = "";
      let ucifra;
      for ( let i=0; i<descifrar.length; i++ ) {
        asciiD = descifrar.charCodeAt(i);
        if ( asciiD >= 65 && asciiD <= 90) {
           ucifra = (( asciiD - 90 - off2 ) % 26) + 90;}
       newDescifra += String.fromCharCode(ucifra);
      }
      return newDescifra;},
    };
