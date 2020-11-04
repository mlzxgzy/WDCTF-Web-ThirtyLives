if [ ! $FLAG ]
then
  export FLAG='{Flag_was_lost_please_contect_to_administrator}';
fi
sed -i "s/{put_key_here}/$FLAG/g" /srv/*
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
