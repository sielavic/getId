 $('.js-delete-board').on('click', function () {
            var target = $(this).attr('id');
            var boardIdPop = target.replace(/[^0-9]/g, "");
            $('.js-del-board').attr('id', 'js-del-board_' +boardIdPop);
            $('._3TTqkG5muwOzqZ').attr('id', 'js-del-board-butt_' +boardIdPop);
            $('.js-del-board').show(200);
      });
