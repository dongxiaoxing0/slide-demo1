let $buttons = $('#buttons > span')
for (let i = 0; i < $buttons.length; i++) {
    $buttons.eq(i).on('click', (e) => {
        let index = $buttons.eq(i).index()
        let p = -300 * index
        $(slideImgs).css({
            transform: 'translate(' + p + 'px)'
        })
        $(e.currentTarget).addClass('red')
            .siblings().removeClass('red')
        n = index
    })
}
let n = 0
let size = $buttons.length
let timerId = setInterval(() => {
    let index = n % size
    $buttons.eq(index).trigger('click')
    n += 1
}, 3000)
$('#window').on('mouseenter', () => {
    window.clearInterval(timerId)
})
$('#window').on('mouseleave', () => {
        timerId = setInterval(() => {
        let index = n % size
        $($buttons[index]).trigger('click')
        n += 1
    }, 3000)
})