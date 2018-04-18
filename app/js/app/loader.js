define(function(require) {
        let $ = require('jquery'),
            dialogPolyfill = require('dialogPolyfill');

        return {
            load_page : function(url) {
                $.get(url, function(data){
                    $("#content-area").html(data)
                });
            },

            load_dialog : function(url) {
                $.get(url, function(data){
                    $("#dialog-area").html(data);
                    let dialog = document.querySelector('dialog');
                    dialogPolyfill.registerDialog(dialog);
                    dialog.showModal();
                })
            },

            close_dialog : function() {
                $("#dialog-area").html("");
                let dialog = document.querySelector('dialog');
                dialogPolyfill.registerDialog(dialog);
                dialog.close();
            }
        }
    }
);
