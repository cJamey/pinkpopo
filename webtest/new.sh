#!/bin/sh
for ((i=0;i<10000;i++))
do
	node /Users/jamey/Sites/pinkpopo/webtest/vote.js;
	echo -n "这是第 ${i} 次执行。"
	sleep 1
done

echo \
