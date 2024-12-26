document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('article-search');
    const categoryFilter = document.getElementById('category-filter');
    const loadMoreBtn = document.getElementById('load-more-articles');
    const articleCategories = document.querySelectorAll('.category');

    // 搜索和筛选功能
    function filterArticles() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        articleCategories.forEach(category => {
            const categoryName = category.querySelector('h3').textContent;
            const articles = category.querySelectorAll('article');

            let visibleArticlesCount = 0;

            articles.forEach(article => {
                const title = article.querySelector('h4').textContent.toLowerCase();
                const description = article.querySelector('p').textContent.toLowerCase();

                const matchesSearch = searchTerm === '' || 
                    title.includes(searchTerm) || 
                    description.includes(searchTerm);
                
                const matchesCategory = selectedCategory === 'all' || 
                    categoryName === selectedCategory;

                if (matchesSearch && matchesCategory) {
                    article.style.display = 'block';
                    visibleArticlesCount++;
                } else {
                    article.style.display = 'none';
                }
            });

            // 如果分类下没有文章，隐藏整个分类
            category.style.display = visibleArticlesCount > 0 ? 'block' : 'none';
        });
    }

    // 加载更多文章功能
    let articlesShown = 2; // 初始显示2篇文章
    const totalArticles = document.querySelectorAll('.article-list article').length;

    function loadMoreArticles() {
        const articles = document.querySelectorAll('.article-list article');
        
        for (let i = articlesShown; i < articlesShown + 2 && i < totalArticles; i++) {
            articles[i].style.display = 'block';
        }

        articlesShown += 2;

        // 如果所有文章都已显示，隐藏加载更多按钮
        if (articlesShown >= totalArticles) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // 初始状态下只显示部分文章
    function initializeArticleDisplay() {
        const articles = document.querySelectorAll('.article-list article');
        
        articles.forEach((article, index) => {
            if (index < articlesShown) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // 事件监听器
    searchInput.addEventListener('input', filterArticles);
    categoryFilter.addEventListener('change', filterArticles);
    loadMoreBtn.addEventListener('click', loadMoreArticles);

    // 初始化页面
    initializeArticleDisplay();
});
