FROM registry.cn-shanghai.aliyuncs.com/wd_ctf_2020/wdctf_caddy
COPY ./html/* /srv/
RUN echo 'if [ ! $FLAG ]; then export FLAG="{Flag_System_Was_Broken_Please_Contect_To_Administrator}"; fi' >> /n2r.sh \
  && echo 'sed -i "s/{put_key_here}/$FLAG/g" /srv/*' >> /n2r.sh
