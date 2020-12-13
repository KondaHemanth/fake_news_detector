#!/usr/bin/env python
# coding: utf-8

# In[31]:


import pickle
import pandas as pd
import numpy as np
import string
import sys
from nltk.corpus import stopwords

# In[17]:


def text_process(text):
    nopunc = [char for char in text if char not in string.punctuation]
    
    nopunc = ''.join(nopunc)
    
    return [word for word in nopunc.split() if word.lower() not in stopwords.words('english')]


# In[18]:


loaded_model = pickle.load(open('finalized_model_new11.sav', 'rb'))


# In[28]:

print(loaded_model.predict([sys.argv[1]])[0])


# In[29]:





# In[30]:





# In[ ]:
