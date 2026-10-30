function fn_ValForm() {
    var sMsg = "";

    if(document.getElementById("nama").value == "") {
                sMsg += "\n* Anda belum mengisikan nama";
            }
            if(document.getElementById("email").value == "") {
                sMsg += "\n* Anda belum mengisikan email";
            }
            if(document.getElementById("umur").value == "") {
                sMsg += "\n* Anda belum mengisikan keperluan";
            }
            if(document.getElementById("kategori").value == "") {
                sMsg += "\n* Anda belum memilih koleksi favorit";
            }

            if(sMsg != "") {
                alert("Peringatan:\n" + sMsg);
                return false;
            } else {
                if(document.getElementById("umur").value <= 17) {
                    alert("Anggota Pelajar");
                } else if(document.getElementById("umur").value > 17) {
                    alert("Anggota Umum");
                }
                return true;            
            }
}