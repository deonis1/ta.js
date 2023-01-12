module.exports = {
  'sma': {in: [[1,2,3,4,5,6,10],6], out: [3.5, 5]},
  'smma': {in: [[1,2,3,4,5,6,10],5], out: [3.4, 4.92]},
  'wma': {in: [[69,68,66,70,68],4], out: [68.3, 68.2]},
  'cwma': {in: [[69,68,66,70,68,69], [1,2,3,5,8]], out: [68.26315789473684, 68.52631578947368]},
  'pwma': {in: [[17,26,23,29,20],4], out: [24.090909090909093, 25.18181818181818]},
  'hwma': {in: [[54,51,86,42,47],4], out: [56.2, 55]},
  'hull': {in: [[6,7,5,6,7,4,5,7],6], out: [4.761904761904762, 5.476190476190476]},
  'kama': {in: [[8,7,8,9,7,9],2,4,8], out: [8, 8.64, 8.377600000000001, 8.377600000000001]},
  'vwma': {in: [[[1,59],[1.1,82],[1.21,27],[1.42,73],[1.32,42]],4], out: [1.184771784232365, 1.258794642857143]},
  'ema': {in: [[1,2,3,4,5,6,10],6], out: [3.5, 5.357142857142857]},
  'wsma': {in: [[1,2,3,4,5,6,10],6], out: [3.5, 4.583333333333333]},
  'lsma': {in: [[5,6,6,3,4,6,7],6], out: [4.714285714285714, 5.761904761904762]},
  'macd': {in: [[1, 2, 3, 4, 5, 6, 14], 3, 6], out: [1.5, 3]},
  'rsi': {in: [[1, 2, 3, 4, 5, 6, 7, 5], 6], out: [100, 100, 66.66666666666666]},
  'wrsi': {in: [[1, 2, 3, 4, 5, 6, 7, 5, 6], 6], out: [100, 71.42857142857143, 75.60975609756098]},
  'tsi': {in: [[1.32, 1.27, 1.42, 1.47, 1.42, 1.45, 1.59], 3, 2, 2], out: [[0.3268608414239478, 0.32038834951456274], [0.5795418491021003, 0.7058823529411765]]},
  'bop': {in: [[[4, 5, 4, 5], [5, 6, 5, 6], [6, 8, 5, 6]], 2], out: [1, 0.5]},
  'fi': {in: [[[1.4, 200], [1.5, 240], [1.1, 300], [1.2, 240], [1.5, 400]], 4], out: [12.00000000000001]},
  'asi': {in: [[[7, 6, 4], [9, 7, 5], [9, 8, 6]]], out: [0, -12.5]},
  'ao': {in: [[[6, 5], [8, 6], [7, 4], [6, 5], [7, 6], [9, 8]], 2, 5], out: [0.0, 0.9000000000000004]},
  'pr': {in: [[2, 1, 3, 1, 2], 4], out: [-100, -50]},
  'stoch': {in: [[[3,2,1], [2,2,1], [4,3,1], [2,2,1]], 2, 1, 1], out: [[66.66666666666667, 66.66666666666667], [33.333333333333336, 33.333333333333336]]},
  'variance': {in: [[6, 7, 2, 3, 5, 8, 6, 2], 7], out: [3.918367346938776, 5.061224489795919]},
  'std': {in: [[1, 2, 3], 3], out: 0.816496580927726},
  'normsinv': {in: [0.4732], out: -0.06722824471054376},
  'cor': {in: [[1, 2, 3, 4, 5, 2], [1, 3, 2, 4, 6, 3]], out: 0.8808929232684737},
  'dif': {in: [0.75, 0.5], out: 0.5},
  'drawdown': {in: [[1,2,3,4,2,3]], out: -0.5},
  'median': {in: [[4, 6, 3, 1, 2, 5], 4], out: [3, 2, 2]},
  'percentile': {in: [[[6,4,7], [5,3,6], [7,5,8]], 0.5], out: [6, 4, 7]},
  'kmeans': {in: [[2, 3, 4, 5, 3, 5, 7, 8, 6, 8, 6, 4, 2, 6], 4], out: [[ 4, 5, 5, 4 ], [ 7, 6, 6, 6 ], [ 8, 8 ], [ 2, 3, 3, 2 ]]},
  'normalize': {in: [[5,4,9,4], 0.1], out: [0.2222222222222222, 0.06349206349206349, 0.8571428571428571, 0.06349206349206349]},
  'denormalize': {in: [[5,4,9,4], [0.2222222222222222, 0.06349206349206349, 0.8571428571428571, 0.06349206349206349, 0.4444444444444444], 0.1], out: [5,4,9,4,6.4]},
  'normalize_pair': {in: [[10,12,11,13],[100,130,100,140]], out: [[55,55],[66,71.5],[60.5,54.99999999999999],[71.5,76.99999999999999]]},
  'normalize_from': {in: [[8,12,10,11], 100], out: [100,150,125,137.5]},
  'mad': {in: [[3, 7, 5, 4, 3, 8, 9], 6], out: [1, 2]},
  'aad': {in: [[4, 6, 8, 6, 8, 9, 10, 11], 7], out: [1.6734693877551021, 1.469387755102041]},
  'ssd': {in: [[7, 6, 5, 7, 9, 8, 3, 5, 4], 7], out: [4.869731585445518, 4.9856938190329, 5.3718844791323335]},
  'bands': {in: [[1, 2, 3, 4, 5, 6], 5, 2], out: [[5.82842712474619, 3.0, 0.1715728752538097], [6.82842712474619, 4.0, 1.1715728752538097]]},
  'fibbands': {in: [[[1,59],[1.1,82],[1.21,27],[1.42,73],[1.32,42]], 4, 3], out: [[1.6526058894448858,1.542197040614731,1.4738932612537028,1.4186888368386255,1.363484412423548,1.29518063306252,1.184771784232365,1.0743629354022102,1.0060591560411822,0.9508547316261047,0.8956503072110273,0.8273465278499992,0.7169376790198443],[1.6177775811703725,1.5330576077284503,1.4806460987347188,1.4382861120137578,1.3959261252927968,1.3435146162990652,1.258794642857143,1.1740746694152209,1.1216631604214893,1.0793031737005283,1.0369431869795673,0.9845316779858357,0.8998117045439136]]},
  'bandwidth': {in: [[1, 2, 3, 4, 5, 6], 5, 2], out: [1.8856180831641265, 1.414213562373095]},
  'keltner': {in: [[[3,2,1], [2,2,1], [4,3,1], [2,2,1], [3,3,1]], 5, 1], out: [[3.932266666666667, 2.066666666666667, 0.20106666666666695]]},
  'don': {in: [[[6, 2], [5, 2], [5, 3], [6, 3], [7, 4], [6, 3]], 5], out: [[7, 4.5, 2], [7, 4.5, 2]]},
  'ichimoku': {in: [[[6,3,2], [5,4,2], [5,4,3], [6,4,3], [7,6,4], [6,5,3], [7,6,5], [7,5,3], [8,6,5], [9,7,6], [8,7,6], [7,5,5],[6,5,4],[6,5,3],[6,3,2], [5,4,2]], 2, 4, 6, 4], out: [[7, 6, 10.5, 6, 5], [7.5, 6, 7.5, 5.5, 6], [6.5, 7, 8, 5, 5]]},
  'atr': {in: [[[3,2,1], [2,2,1], [4,3,1], [2,2,1]], 3], out: [2.0, 1.6666666666666667, 2.111111111111111, 1.7407407407407407]},
  'supertrend': {in: [[[3,2,1], [2,2,1], [4,3,1], [2,2,1]], 3, 0.5], out: [[3.5555555555555554, 1.4444444444444444],[2.3703703703703702, 0.6296296296296297]]},
  'aroon_up': {in: [[5, 4, 5, 2], 3], out: [100, 50]},
  'aroon_down': {in: [[2, 5, 4, 5], 3], out: [0, 50]},
  'aroon_osc': {in: [[2, 5, 4, 5], 3], out: [50,50]},
  'mfi': {in: [[[19, 13], [14, 38], [21, 25], [32, 17]], 3], out: [41.53846153846154, 45.578231292517]},
  'roc': {in: [[1, 2, 3, 4], 3], out: [2, 1]},
  'cop': {in: [[3, 4, 5, 3, 4, 5, 6, 4, 7, 5, 4, 7, 5], 4, 6, 5], out: [0.3755555555555556, 0.23666666666666666]},
  'kst': {in: [[8, 6, 7, 6, 8, 9, 7, 5, 6, 7, 6, 8, 6, 7, 6, 8, 9, 9, 8, 6, 4, 6, 5, 6, 7, 8, 9], 5, 7, 10, 15, 5, 5, 5, 7, 4], out: [[-0.6828231292517006, -0.5174886621315192], [-0.2939342403628118, -0.5786281179138322], [0.3517800453514739, -0.35968820861678]]},
  'obv': {in: [[[25200, 10], [30000, 10.15], [25600, 10.17], [32000, 10.13]]], out: [0, 30000, 55600, 23600]},
  'vwap': {in: [[[127.21, 89329], [127.17, 16137], [127.16, 23945]], 2], out: [127.20387973375304, 127.16402599670675]},
  'mom_osc': {in: [[1, 1.2, 1.3, 1.3, 1.2, 1.4], 4], out: [0, 3.8461538461538494]},
  'mom': {in: [[1, 1.1, 1.2, 1.24, 1.34], 4], out: [0.24, 0.24]},
  'ha': {in: [[[3, 4, 2, 3], [3, 6, 3, 5], [5, 5, 2, 3]]], out: [[3, 4, 2, 3], [3, 6, 3, 4.25], [3.625, 5, 2, 3.75]]},
  'ren': {in: [[[8, 6], [9, 7], [9, 8], [13, 10]], 2], out: [[8, 10, 8, 10], [10, 12, 10, 12]]},
  'chaikin_osc': {in: [[[2,3,4,6],[5,5,5,4],[5,4,3,7],[4,3,3,4],[6,5,4,6],[7,4,3,6]],2,4], out: [-1.6666666666666665, -0.28888888888888886, -0.7362962962962962]},
  'envelope': {in: [[6,7,8,7,6,7,8,7,8,7,8,7,8], 11, 0.05], out: [[7.540909090909091, 7.181818181818182, 6.822727272727272], [7.636363636363637, 7.2727272727272725, 6.909090909090908]]},
  'fractals': {in: [[[7,6],[8,6],[9,6],[8,5],[7,4],[6,3],[7,4],[8,5]]], out: [[false, false],[false,false],[true,false],[false,false],[false,false],[false,true],[false,false],[false,false]]},
  'recent_high': {in: [[4,5,6,7,8,9,8,7,8,9,10,3,2,1], 3], out: {index: 10, value: 10}},
  'recent_low': {in: [[1,4,5,6,4,3,2,3,4,3,5,7,8,8,5], 4], out: {index: 6, value: 2}},
  'support': {in: [[4,3,2,5,7,6,5,4,7,8,5,4,6,7,5]], out: 4},
  'resistance': {in: [[5,7,5,5,4,6,5,4,6,5,4,3,2,4,3,2,1]], out: 6.428571428571429},
  'ac': {in: [[[6, 5], [8, 6], [7, 4], [6, 5], [7, 6], [9, 8]], 2, 4], out: [0.125, 0.5625]},
  'fib': {in: [1,2], out: [1,1.236,1.3820000000000001,1.5,1.6179999999999999,1.786,2,2.6180000000000003,3.618,4.618,5.236]},
  'alligator': {in: [[8,7,8,9,7,8,9,6,7,8,6,8,10,8,7,9,8,7,9,6,7,9]], out: [[7.217569412835686, 6.985078985569999, 6.456171046541722], [7.171597633136094, 7.119368115440011, 6.719144767291392]]},
  'gator': {in: [[8,7,8,9,7,8,9,6,7,8,6,8,10,8,7,9,8,7,9,6,7,9]], out: [[0.23249042726568714, -0.5289079390282767], [0.05222951769608297, -0.4002233481486188]]},
  'standardize': {in: [[6,4,6,8,6]], out: [0, -1.5811388300841895, 0, 1.5811388300841895, 0]},
  'er': {in: [[0.02, -0.01, 0.03, 0.05, -0.03]], out: 0.011934565489708282},
  'ar': {in: [[0.02, -0.01, 0.03, 0.05, -0.03], 3], out: [0.03667479679633267, -0.053301281310417566]},
  'winratio': {in: [[0.01,0.02,-0.01,-0.03,-0.015,0.005]], out: 0.5},
  'avgwin': {in: [[0.01,0.02,-0.01,-0.03,-0.015,0.005]], out: 0.011666666666666665},
  'avgloss': {in: [[0.01,0.02,-0.01,-0.03,-0.015,0.005]], out: -0.018333333333333333},
  'fisher': {in: [[8,6,8,9,7,8,9,8,7,8,6,7], 9], out: [[-0.018907501228583555, -0.1104469157900972], [-0.32522580129662043, -0.018907501228583555],[-0.4884829106274281, -0.32522580129662043]]},
  'cross': {in: [[3,4,5,4,3], [4,3,2,3,4]], out: [{index: 1, cross: true}, {index: 4, cross: false}]},
  'se': {in: [[34,54,45,43,57,38,49], 10], out: 2.4243661069253055},
  'kelly': {in: [[0.01,0.02,-0.01,-0.03,-0.015,0.045,0.005]], out: 0.14434748152632182},
  'zscore': {in: [[34,54,45,43,57,38,49], 5], out: [1.2664106627730554, -1.3314928442246727, 0.4078462733398033]},
  'log': {in: [[5, 14, 18, 28, 68, 103]], out: [1.6094379124341003, 2.6390573296152584, 2.8903717578961645, 3.332204510175204, 4.219507705176107, 4.634728988229636]},
  'exp': {in: [[1.6, 2.63, 2.89, 3.33, 4.22, 4.63]], out: [4.953032424395115, 13.873769902129904,17.993309601550315, 27.938341703236507, 68.03348428941965, 102.51406411049345]},
  'halftrend': {in: [[[100,97,90],[101,98,94],[103,96,92],[106,100,95],[110,101,100],[112,110,105],[110,100,90],[103,100,97],[95,90,85],[94,80,80],[90,82,81],[85,80,70]], 6, 3, 2], out: [[110.13773148148148, 100, 89.86226851851852, 'long'], [115.77674897119341, 105, 94.22325102880659, 'long'], [111.32021604938272, 100, 88.67978395061728, 'long'], [116.10018004115227, 105, 93.89981995884773, 'long'], [111.2485853909465, 100, 88.7514146090535, 'long'], [114.76787551440329, 105, 95.23212448559671, 'long'], [114.99356995884773, 100, 85.00643004115227, 'long']]},
  'sum': {in: [[1,2,3,4,5]], out: 15},
  'covariance': {in: [[12,13,25,39],[67,45,32,21],4], out: [-165.8125]},
  'ncdf': {in: [13,10,2], out:0.9331737996110652},
  'zigzag': {in: [[[10,9], [12,10], [14,12], [15,13], [16,15], [11,10], [18,15]], 0.25], out:[9, 10.75, 12.5, 14.25, 16, 10, 18]},
  'zigzag_close': {in: [[6,7,8,9,10,12,9,8,5,3,3,3,5,7,8,9,11]], out: [6, 7.2, 8.4, 9.6, 10.8, 12, 10.5, 9, 7.5, 6, 4.5, 3, 4.6, 6.2, 7.800000000000001, 9.4, 11]},
  'psar': {in: [[[82.15,81.29],[81.89,80.64],[83.03,81.31],[83.30,82.65],[83.85,83.07],[83.90,83.11],[83.33,82.49],[84.30,82.3],[84.84,84.15],[85,84.11],[75.9,74.03],[76.58,75.39],[76.98,75.76],[78,77.17],[70.87,70.01]], 0.02, 0.2], out: [81.29,82.15,80.64,80.64,80.7464,80.932616,81.17000672,81.3884061824,81.67956556416,82.0588176964608,85,85,84.7806,84.565588,84.35487624000001]},
  'macd_signal': {in: [[1, 2, 3, 4, 5, 6, 14, 8, 10, 11], 3, 6, 3], out: [2.107142857142857, 1.8380102040816328, 1.6534256559766765]},
  'macd_bars': {in: [[1, 2, 3, 4, 5, 6, 14, 8, 10, 11], 3, 6, 3], out: [-0.28571428571428603, -0.26913265306122436, -0.18458454810495661]},
  'permutations': {in: [[10,10,10]], out: 1000},
  'martingale': {in: [[-1,-1,1,1,-1,-1], 5], out: 20},
  'antimartingale': {in: [[1,1,-1,-1,1,1], 5], out: 20},
  'mse': {in: [[7,8,7,8,6,9],[6,8,8,9,6,8]], out: 0.6666666666666666},
  'cum': {in: [[3,5,7,5,10], 4], out: [20,27]},
  'vwwma': {in: [[[1,59],[1.1,82],[1.21,27],[1.42,73],[1.32,42]],4], out: [1.2618288590604028, 1.3160229445506693]},
  'elderray': {in: [[6,5,4,7,8,9,6,8], 7], out: [[2.571428571428571,-2.428571428571429],[2.2857142857142856,-2.7142857142857144]]},
  'hv': {in: [[7,6,5,7,8,9,7,6,5], 8], out: [0.6420403501307599,0.6823595190987881]},
  'pvalue': {in: [2,4], out: 0.061018363939899845},
  'rvi': {in: [[[4,6,3,3], [3,5,2,2], [2,5,2,4], [4,6,4,5], [5,7,4,4], [4,6,3,4], [4,7,3,5], [5,7,5,6], [6,8,6,6], [6,9,5,6], [6,8,6,7], [7,9,5,6],[6,7,4,5],[5,6,5,6],[6,8,5,5],[5,7,2,6]],8],out:[0.29878048780487804,0.21951219512195122,0.1589403973509934,0.16083916083916086,0.09859154929577463,0.05109489051094891]},
  'rvi_signal': {in:[[0.29878048780487804,0.21951219512195122,0.1589403973509934,0.16083916083916086,0.09859154929577463,0.05109489051094891]],out:[0.2027541389316547,0.1596104767996724,0.12148278468863555]},
  'rsi_divergence': {in:[[74,83,66,78,69,70,84,73,74,73,83],5], out: [0,0,1,0,1,0]},
  'divergence': {in:[[48,34,43,54,56,64,43],[76,74,43,55,34,32,45,47]], out: [0, 0, 1, 1, 0, 1]}
}
