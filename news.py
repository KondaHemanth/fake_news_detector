from newspaper import Article

import sys
import subprocess

#print(sys.argv)

url = str(sys.argv[1])
#'http://youtube.com'
#"https://timesofindia.indiatimes.com/business/india-business/75-passengers-received-refunds-for-flights-cancelled-during-lockdown/articleshow/79683533.cms"


article = Article(url)
article.download()
article.parse()

if(article.text):
    #print(article.text)
    subprocess.call(['python3','./model.py', article.text])
else:
    print('Wrong URL')
