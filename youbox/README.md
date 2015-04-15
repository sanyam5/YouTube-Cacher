YouBox(Under Construction!!)
------------

* manages addition/deletion of files and communicates with central server.
* receives instructions from the javascript running in the plugin.


Things to do
-------------

* Write background.py
* See how background.py can be scheduled in cron jobs
* Write all basic functions in youbox.py (these will be called from background.py)
* For each event log should be updated. Helful in debugging.
* The ${DOWNLOAD_DIRECTORY} must be read from config file.


Events -> Actions
-----------

* Book Keeping -> inform server, update local database
* File Deleted from box manually -> {Book Keeping}
* File Added to box manually -> ?? (Fake files ?)
* Download File(url,v_id) -> download, save, {Book Keeping}
* Download from server request -> ask peer_box_url (aka glb), {Download File}
* Download from internet request -> open ssyoutube.com/watch?v=$v_id, parse download url using xpath, {Download File}
* Video requested -> return url(via local/ global/ ""), update local database(v_id,datetime)
* Accessed_count of a video crosses Cache Threshold -> Download from server/internet
* Memory limit reached -> consult with server(if server not available make your best judgement access database, choose a file), delete file, {Book Keeping}
* Commands from server -> Add/Delete files, {Book Keeping}
* Time quanta (15 minutes say) expired -> {Book Keeping}, check(Accessed_count of a video crosses Cache Threshold)