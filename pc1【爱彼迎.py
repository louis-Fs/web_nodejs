import urllib.request
import re
import random
import time

#user-agent pools qq,firefox,chorme,ie
uapools=[
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3741.400 QQBrowser/10.5.3863.400",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:62.0) Gecko/20100101 Firefox/62.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko",
    ]
def ua():
    opener=urllib.request.build_opener()
    this_ua=random.choice(uapools)
    u_a=('User-Agent',this_ua)
    opener.addheaders=[u_a]
    urllib.request.install_opener(opener)
def data(name):#爬取短新闻
    ua()
    num=0
    filename=name+'.txt'
    file=open(filename,'w+',encoding='utf-8')
    while(True):
        print(num)
        url='https://www.airbnb.cn/s/'+name+'/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&screen_size=large&hide_dates_and_guests_filters=false&s_tag=mzbC1w6O&section_offset=4&items_offset='+str(num)
        date=[]
        data=urllib.request.urlopen(url).read().decode('utf-8','ignore')
        pat='<div class="_1szwzht">(.*?)</div>'
        rst=re.compile(pat,re.S).findall(data)
        pat1='aria-label="(.*?)"'
        pat2='background-image:url\((.*?)\?'
        pat3='<a href="(.*?)\?'
        rst1=[]
        rst2=[]
        rst3=[]

        for i in range(len(rst)):
            rst1.append(re.compile(pat1,re.S).findall(str(rst[i])))
            rst2.append(re.compile(pat2,re.S).findall(str(rst[i])))
            rst3.append(re.compile(pat3,re.S).findall(str(rst[i])))          
            print(str(rst1[i][0])+','+str(rst2[i][0])+','+'http://www.airbnb.cn'+str(rst3[i][0])+'\n')

        num+=18
        if(num==180):
            print("success")
            break
    file.close()

def data1():#爬取含图片的新闻
    ua()
    url = ''
    date = []
    data = urllib.request.urlopen(url).read().decode('utf-8', 'ignore')
    pat = '<div class="card"(.*?)</div>'
    rst1 = re.compile(pat, re.S).findall(data)
    #print(rst1)
    pat_href='href="(.*?)"'
    pat_title='title="(.*?)"'
    pat_data='data-original="/(.*?)"'
    rst_href=re.compile(pat_href,re.S).findall(str(rst1))
    rst_title=re.compile(pat_title,re.S).findall(str(rst1))
    rst_data=re.compile(pat_data,re.S).findall(str(rst1))
    for i in range(0,len(rst_href)):
        dic={}
        dic['hre_f']=url+rst_href[i]
        dic['titl_e']=rst_title[i]
        dic['pic_url']=url+rst_data[i]
        date.append(dic)
    return date
def data2():#爬取轮播图片
    ua()
    url = ''
    date = []
    data = urllib.request.urlopen(url).read().decode('utf-8', 'ignore')
    pat = '<div class="silder-main-img">(.*?)</div>'
    rst1 = re.compile(pat, re.S).findall(data)
    #print(rst1)
    pat_href='href="(.*?)"'
    pat_title='title="(.*?)"'
    pat_data='data-org="/(.*?)"'
    rst_href=re.compile(pat_href,re.S).findall(str(rst1))
    rst_title=re.compile(pat_title,re.S).findall(str(rst1))
    rst_data=re.compile(pat_data,re.S).findall(str(rst1))
    for i in range(0,len(rst_href)):
        dic={}
        dic['hre_f']=url+rst_href[i]
        dic['titl_e']=rst_title[i]
        dic['pic_url']=url+rst_data[i]
        date.append(dic)
    return date

name=['chengdu','beijing','shanghai','chongqing','xian','guangzhou','wuhan','hangzhou']
for i in range(len(name)):
    print(name[i])
    data(name[i])