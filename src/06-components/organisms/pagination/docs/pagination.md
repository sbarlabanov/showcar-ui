<h2>Pagination <span class="status approved">Approved</span><span class="status js">JS</span></h2>

If you want to use the pagination component, you need to add the ul element with the `sc-pagination` class as shown below and the corresponding javascript snippet.  
In order to change default english previous/next text on buttons please provide attributes `data-previous-text` and `data-next-text` on `<ul>` element.

You need the following properties to instantiate the "Pager":

* The name of the "root" element (in fact you can use document.querySelector('.sc-pagination') to obtain the right element)
* Number of items per page (itemsPerPage)
* The currently active page (activePage)
* Total number of items (totalCount)
* The url-template which is used for the a-tag (urlTemplate) with the {page} and the {size} placeholders.
* (Optional) If you want to use pagination without page limit provide unlimited property `true`. Otherwise you will be limited by 20 pages.
* The {size} placeholder hold the value for the items per page. The {page} placeholder will be filled with the currently active page.

<script>
document.addEventListener('DOMContentLoaded', function() {
 (function ($) {
   var paginationElement = document.querySelector('.sc-pagination'),
   itemsPerPage = 20,
   activePage = 1,
   totalCount = 700,
   urlTemplate = 'https://autoscout24.github.io/showcar-ui/?page={page}&size={size}',
   unlimited = true;

   if (paginationElement) {
   new Pager(paginationElement, itemsPerPage, activePage, totalCount, urlTemplate, unlimited);
   }
 })(window.Zepto);
 });
</script>
