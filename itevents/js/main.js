function getArticleFromJSON() {

    var count = 0;

    return function (event) {
        var items = [];
        event.preventDefault();
        $.getJSON('js/events.json', function (data) {
            $.each(data, function (key, val) {
                items.push(new Event(val.id, val.title, new Date(val.eventDate), val.address));
            });
            $('.articles .article').last().after(makeArticle(items[count]));
            count++;
        });
    }
}
var articles = getArticleFromJSON();

$(function(){
    $(".load_more a").on("click", function(event){
        articles(event)
    });
});

function Event(id, title, eventDate, address) {
    this.id = id;
    this.title = title;
    this.eventDate = eventDate;
    this.address = address;
}

function makeArticle(event){
    return '<article class="article"><a href="#" class="close_article"></a><div class="article_time">'
        + event.eventDate.getHours()
        + ':'
        + event.eventDate.getMinutes()
        + '</div> <p class="location">Киев, Украина</p><p> <a href="#">'
        + event.title
        + '</a></p></article>';
}

$(function(){
    $(".articles").on("click", '.close_article', function(event){
        event.preventDefault();
        $(this).parent().hide('slow');
    });
});


function createCalendar(year, month) {
    makeTitleCalendar(year, month);
    var elem = $('.datepicker__body');
    var dateNow = new Date();

    var date = new Date(year, month);
    var prevMonth = new Date(year, month, - getDayOfWeek(date) + 1);
    var nextMonth = new Date(year, month + 1);
    var table = '<tr>';

    for (var i = 0; i < getDayOfWeek(date); i++) {
        table += '<td class="datepicker__td not_this_month"><span>' + prevMonth.getDate() + '</span></td>';
        prevMonth.setDate(prevMonth.getDate() + 1);
    }

    while (date.getMonth() == month) {
        table += '<td class="datepicker__td';
        if (dateNow.getDate() === date.getDate() && dateNow.getMonth() === date.getMonth() && dateNow.getFullYear() === date.getFullYear()){
            table += ' active'
        }
        table += '"><span>' + date.getDate() + '</span></td>';
        if (getDayOfWeek(date) % 7 == 6) { 
            table += '</tr><tr>';
        }
        date.setDate(date.getDate() + 1);
    }

    if (getDayOfWeek(date) != 0) {
        for (i = getDayOfWeek(date); i < 7; i++) {
            table += '<td class="datepicker__td not_this_month" data-next="next"><span>' + nextMonth.getDate() + '</span></td>';
            nextMonth.setDate(nextMonth.getDate() + 1);
        }
    }
    table += '</tr>';
    elem.html(table)
}

function getDayOfWeek(date) {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function getMonthName(month, variantMonthNaming) {
    var monthStr;
    var monthes = [];
    monthes[0] = ["Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"];
    monthes[1] = ["Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"];
    if (variantMonthNaming != 0 || variantMonthNaming != 1) {
        variantMonthNaming == 0;
    }
    if (month < 0 || month > 11) month == 0;
    monthStr = monthes[variantMonthNaming][month];
    return monthStr;
}

function makeTitleCalendar(year, month) {
    var date = new Date(year, month);
    var monthStr;
    var ZERO_VARIANT_NAMING_MONTH = 0;
    monthStr = getMonthName(month, ZERO_VARIANT_NAMING_MONTH);
    $('.datepicker-title').text(monthStr + ' ' + date.getFullYear());
}


$(function(){
    $(window).on("load", function(){
        var FIRST_VARIANT_NAMING_MONTHES = 1;
        $(".current_date__day").text(new Date().getDate());
        $(".current_date__month").text(getMonthName(new Date().getMonth(), FIRST_VARIANT_NAMING_MONTHES));
    });
});



$(window).on('load', createCalendar(new Date().getFullYear(), new Date().getMonth()));

function setMonth() {

    var date = new Date();
    var month = date.getMonth();

    return function () {
        if ($(this).hasClass('datepicker__next') || $(this).data('next')){
            month++;
        } else {
            month--;
        }
        date.setMonth(month);
        if (month == 12) month = 0;
        if (month == -1) month = 11;
        createCalendar(date.getFullYear(), month);
    }
}

$(function(){
    $(".datepicker").on("click", '.not_this_month', function(){
        var that = this;
        toggleMonth.apply(that);
    });
});

$(function(){
    $(".datepicker__caption span").on("click", function(){
        var that = this;
        if (!$(this).hasClass('datepicker-title')) toggleMonth.apply(that);
    });
});

$(function(){
    $(".datepicker").on("click", '.datepicker__td', function(event){
        event.preventDefault();
        if (!$(this).hasClass('not_this_month')){
            $(this).parent().parent().find('.active').removeClass('active');
            $(this).addClass('active');
        }
    });
});

var toggleMonth = setMonth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBjb3JyZWN0RGF0ZURpc3BsYXkpO1xyXG4kKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgZXF1YWxDb2x1bW5IZWlnaHRzKCdoZWFkZXJfX3RvZGF5JywgJ2hlYWRlcl9fbW9udGgnKSk7XHJcbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBlcXVhbENvbHVtbkhlaWdodHMoJ2hlYWRlcl9fc2VhcmNoJywgJ2hlYWRlcl9fbG9naW4nKSk7XHJcbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBoZWlnaHRNYWluTG9nbygpKTtcclxuZnVuY3Rpb24gY29ycmVjdERhdGVEaXNwbGF5KCkge1xyXG4gICAgY29uc3QgRElGRkVSRU5UX1BfREFZX1dJRFRIX0NVUlJFTlRfREFZID0gMjk7XHJcbiAgICB2YXIgbmV3Rm9udFNpemU7XHJcbiAgICB2YXIgY3VycmVudERhdGUgPSAkKFwiLmNhbGVuZGFyIC50b2RheSAuY3VycmVudF9kYXRlXCIpO1xyXG4gICAgdmFyIHBEYXkgPSAkKFwiLmRheVwiKTtcclxuICAgIHZhciBjdXJyZW50RGF0ZVdpZHRoID0gcGFyc2VGbG9hdChjdXJyZW50RGF0ZS53aWR0aCgpKTtcclxuICAgIHZhciBwRGF5V2lkdGggPSBwYXJzZUZsb2F0KHBEYXkud2lkdGgoKSk7XHJcbiAgICB2YXIgcERheUZvbnRTaXplID0gcGFyc2VGbG9hdChwRGF5LmNzcyhcImZvbnQtc2l6ZVwiKSk7XHJcbiAgICB2YXIgcERheURpZmZlcmVudCA9IERJRkZFUkVOVF9QX0RBWV9XSURUSF9DVVJSRU5UX0RBWTtcclxuICAgIG5ld0ZvbnRTaXplID0gY3VycmVudERhdGVXaWR0aCAqIHBEYXlGb250U2l6ZSAvIChwRGF5V2lkdGggKyBwRGF5RGlmZmVyZW50KTtcclxuICAgIGlmICgocERheURpZmZlcmVudCArIHBEYXlXaWR0aCkgPj0gY3VycmVudERhdGVXaWR0aCkge1xyXG4gICAgICAgIGN1cnJlbnREYXRlLmNzcyhcImZvbnQtc2l6ZVwiLCBNYXRoLm1pbigyMjUsIG5ld0ZvbnRTaXplKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnREYXRlLmNzcyhcImZvbnQtc2l6ZVwiLCAyMjUpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZXF1YWxDb2x1bW5IZWlnaHRzKGNvbHVtbk9uZUNsYXNzbmFtZSwgY29sdW1uVHdvQ2xhc3NuYW1lKSB7XHJcbiAgICB2YXIgY29sdW1uT25lQmxvY2ssIGNvbHVtblR3b0Jsb2NrO1xyXG4gICAgdmFyIGNvbHVtbk9uZUhlaWdodCwgY29sdW1uVHdvSGVpZ2h0O1xyXG4gICAgY29sdW1uT25lQmxvY2sgPSBnZXRFbGVtZW50QnlDbGFzc05hbWUoY29sdW1uT25lQ2xhc3NuYW1lKTtcclxuICAgIGNvbHVtblR3b0Jsb2NrID0gZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lKGNvbHVtblR3b0NsYXNzbmFtZSk7XHJcblxyXG4gICAgY29sdW1uT25lSGVpZ2h0ID0gY29sdW1uT25lQmxvY2sub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29sdW1uVHdvSGVpZ2h0ID0gY29sdW1uVHdvQmxvY2sub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGNvbHVtbk9uZUJsb2NrLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KGNvbHVtbk9uZUhlaWdodCwgY29sdW1uVHdvSGVpZ2h0KSArICdweCc7XHJcbiAgICBjb2x1bW5Ud29CbG9jay5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heChjb2x1bW5PbmVIZWlnaHQsIGNvbHVtblR3b0hlaWdodCkgKyAncHgnO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSkge1xyXG4gICAgdmFyIGVsZW1lbnRzTGlzdDtcclxuICAgIGVsZW1lbnRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBlbGVtZW50c0xpc3RbMF07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoZWlnaHRNYWluTG9nbygpIHtcclxuICAgIHZhciBjb2x1bW5Mb2dvQmxvY2ssIGNvbHVtblNlYXJjaEJsb2NrLCBjb2x1bW5Nb250aEJsb2NrO1xyXG4gICAgdmFyIGNvbHVtbkxvZ29IZWlnaHQsIGNvbHVtblNlYXJjaEhlaWdodCwgY29sdW1uTW9udGhIZWlnaHQ7XHJcbiAgICBjb2x1bW5Mb2dvQmxvY2sgPSBnZXRFbGVtZW50QnlDbGFzc05hbWUoJ2hlYWRlcl9fbG9nbycpO1xyXG4gICAgY29sdW1uU2VhcmNoQmxvY2sgPSBnZXRFbGVtZW50QnlDbGFzc05hbWUoJ2hlYWRlcl9fc2VhcmNoJyk7XHJcbiAgICBjb2x1bW5Nb250aEJsb2NrID0gZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lKCdoZWFkZXJfX21vbnRoJyk7XHJcblxyXG4gICAgY29sdW1uU2VhcmNoSGVpZ2h0ID0gY29sdW1uU2VhcmNoQmxvY2sub2Zmc2V0SGVpZ2h0O1xyXG4gICAgY29sdW1uTW9udGhIZWlnaHQgPSBjb2x1bW5Nb250aEJsb2NrLm9mZnNldEhlaWdodDtcclxuICAgIGNvbHVtbkxvZ29IZWlnaHQgPSBjb2x1bW5TZWFyY2hIZWlnaHQgKyBjb2x1bW5Nb250aEhlaWdodDtcclxuICAgIGNvbnNvbGUubG9nKGNvbHVtbkxvZ29IZWlnaHQpO1xyXG4gICAgY29sdW1uTG9nb0Jsb2NrLnN0eWxlLmhlaWdodCA9IGNvbHVtbkxvZ29IZWlnaHQgKyAncHgnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnRpY2xlRnJvbUpTT04oKSB7XHJcblxyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkLmdldEpTT04oJ2V2ZW50cy5qc29uJywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChuZXcgRXZlbnQodmFsLmlkLCB2YWwudGl0bGUsIG5ldyBEYXRlKHZhbC5ldmVudERhdGUpLCB2YWwuYWRkcmVzcykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLmFydGljbGVzIC5hcnRpY2xlJykubGFzdCgpLmFmdGVyKG1ha2VBcnRpY2xlKGl0ZW1zW2NvdW50XSkpO1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbnZhciBhcnRpY2xlcyA9IGdldEFydGljbGVGcm9tSlNPTigpO1xyXG5cclxuZnVuY3Rpb24gRXZlbnQoaWQsIHRpdGxlLCBldmVudERhdGUsIGFkZHJlc3MpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZXZlbnREYXRlID0gZXZlbnREYXRlO1xyXG4gICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUFydGljbGUoZXZlbnQpe1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxhcnRpY2xlIGNsYXNzPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjbG9zZV9hcnRpY2xlXCI+PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlX3RpbWVcIj5gXHJcbiAgICAgICAgKyBldmVudC5ldmVudERhdGUuZ2V0SG91cnMoKVxyXG4gICAgICAgICsgYDpgXHJcbiAgICAgICAgKyBldmVudC5ldmVudERhdGUuZ2V0TWludXRlcygpXHJcbiAgICAgICAgKyBgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJhcnRpY2xlX2xvY2F0aW9uXCI+0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwPC9wPlxyXG4gICAgICAgIDxwPiA8YSBocmVmPVwiI1wiPmBcclxuICAgICAgICArIGV2ZW50LnRpdGxlXHJcbiAgICAgICAgKyBgPC9hPjwvcD5cclxuICAgIDwvYXJ0aWNsZT5gO1xyXG59XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiLmFydGljbGVzXCIpLm9uKFwiY2xpY2tcIiwgJy5jbG9zZV9hcnRpY2xlJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCdzbG93Jyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLy89IGNhbGVuZGFyLmpzXHJcblxyXG4iXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
