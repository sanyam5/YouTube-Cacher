import MySQLdb as mdb

db = mdb.connect('localhost', 'root', 'pass', 'youbox_db')
cursor = db.cursor()
cursor.execute("SET NAMES 'utf8'")

def executer(arg):
	print "executing .. ",arg
	cursor.execute(arg)
def fetcher():
	return cursor.fetchall()