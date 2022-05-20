 $('.js-delete-board').on('click', function () {
            var target = $(this).attr('id');
            var boardIdPop = target.replace(/[^0-9]/g, "");
            $('.js-del-board').attr('id', 'js-del-board_' +boardIdPop);
            $('._3TTqkG5muwOzqZ').attr('id', 'js-del-board-butt_' +boardIdPop);
            $('.js-del-board').show(200);
      });

 $('.js-delete-comment').on('click', function () {
            var target = $(this).attr('id');
            var img = $(this).attr('data-value');
            var commIdPop = target.replace(/[^0-9]/g, "");
            $('#js-pop-over-del_'+commIdPop).attr("data-value", img).show(200);
      });
