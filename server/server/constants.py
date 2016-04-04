import os
DOWNLOAD_DIR = os.path.dirname(os.path.abspath(__file__)) + "/../../downloads"
RELEVANT_HISTORY = 30 #in days, the duration that should be considered when deciding what to cache
NUM_MAX_CACHE = 30 # max number of videos that can be cached at one time.
NUM_MUST_HAVE = 20 # = x such that top x videos must always be cached
assert (NUM_MUST_HAVE<=NUM_MAX_CACHE), "Setting NUM_MUST_HAVE more than MAX_CACHE results in unstable caching "
MIN_FREQ = 5 #minimum frequency of a video to be considered for caching
