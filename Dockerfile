FROM caddy:latest
COPY ./html/* /srv/
COPY ./Caddyfile /etc/caddy/Caddyfile
COPY ./init.sh /init.sh
CMD ["/bin/sh","/init.sh"]

