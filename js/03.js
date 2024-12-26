document.addEventListener('DOMContentLoaded', function() {
    // AI工具使用趋势
    const toolTrendChart = echarts.init(document.getElementById('toolTrendChart'));
    toolTrendChart.setOption({
        title: { text: 'AI工具使用趋势' },
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['2020', '2021', '2022', '2023', '2024']
        },
        yAxis: { type: 'value' },
        series: [{
            name: 'ChatGPT',
            type: 'line',
            data: [10, 30, 50, 80, 120],
            smooth: true
        }, {
            name: 'Midjourney',
            type: 'line',
            data: [5, 15, 35, 60, 90],
            smooth: true
        }]
    });

    // AI领域投资分布
    const investmentChart = echarts.init(document.getElementById('investmentChart'));
    investmentChart.setOption({
        title: { text: 'AI领域投资分布' },
        tooltip: { trigger: 'item' },
        series: [{
            type: 'pie',
            radius: '70%',
            data: [
                { value: 35, name: '自然语言处理' },
                { value: 25, name: '计算机视觉' },
                { value: 20, name: '机器学习' },
                { value: 15, name: '机器人技术' },
                { value: 5, name: '其他' }
            ]
        }]
    });

    // AI技术专利数量
    const patentChart = echarts.init(document.getElementById('patentChart'));
    patentChart.setOption({
        title: { text: 'AI技术专利数量' },
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['美国', '中国', '日本', '欧盟', '韩国']
        },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [1200, 980, 650, 450, 300],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: '#83bff6'},
                    {offset: 1, color: '#188df0'}
                ])
            }
        }]
    });

    // AI应用领域分布
    const applicationChart = echarts.init(document.getElementById('applicationChart'));
    applicationChart.setOption({
        title: { text: 'AI应用领域分布' },
        tooltip: { trigger: 'item' },
        series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                { value: 30, name: '医疗' },
                { value: 25, name: '金融' },
                { value: 20, name: '教育' },
                { value: 15, name: '制造业' },
                { value: 10, name: '其他' }
            ]
        }]
    });
});