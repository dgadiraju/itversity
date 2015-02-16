var entries = [
    {"id":"1", "title":"Big Data Introduction", "url":"https://www.youtube.com/playlist?list=PLf0swTFhTI8o6LURHy7u3YIBC3FnuZIdP", "description":"Understand Big Data - Hadoop, NoSQL with case studies"},
    {"id":"2", "title":"Hadoop Administration", "url":"https://www.youtube.com/playlist?list=PLf0swTFhTI8pOZ4VBSGerKUmF9USWL6vd", "description":"Learn Hadoop administration using Cloudera Distribution"},
    {"id":"3", "title":"Hadoop - Building EDW", "url":"https://www.youtube.com/playlist?list=PLf0swTFhTI8q5X0ZBeUaK1yl_TP-tJInC", "description":"Build Enterprise Data Warehouse using Hadoop, Hive, Sqoop etc"},
    {"id":"4", "title":"Hadoop - Data to Analytics", "url":"https://www.youtube.com/playlist?list=PLf0swTFhTI8rWAzLVxotgyyigpx0mu-9P", "description":"Convert data to analytics in 2 hours - using Hadoop, Hive, Hue and Tableau"},
    {"id":"5", "title":"Hadoop - Performance Tuning", "url":"https://www.youtube.com/playlist?list=PLf0swTFhTI8qBGRdIwWeP5lh5UY2AfIoG", "description":"Learn Hadoop Performance Tuning Tips & Techniques"}
];


exports.getItvEntries = function() {
	return entries;
}

exports.getItvEntry = function(id) {
	for(var i=0; i<entries.length; i++) {
		if(entries[i].id == id) return entries[i];
	}
}