#!/bin/sh
for ((i=0;i<50010000;i++))
do
	node ./mission.js;
	echo -n "这是第 ${i} 次执行。"
	sleep 1
done

echo \
