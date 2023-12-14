# Dockerfile
FROM kalilinux/kali-rolling

ARG KALI_USER=kali
ARG KALI_PASSWORD=toor

RUN echo "[i] Updating and upgrading Kali (this will take a while)"
RUN apt-get update
RUN apt-get full-upgrade -y

RUN echo "[i] Installing Xfce4 & xrdp (this will take a while as well)"
RUN apt-get install -y kali-desktop-xfce xorg xrdp

RUN echo "[i] Configuring xrdp to listen to port 3390 (but not starting the service)"
RUN sed -i 's/port=3389/port=3390/g' /etc/xrdp/xrdp.ini

RUN apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget kali-linux-headless

RUN wget https://gitlab.com/kalilinux/recipes/kali-scripts/-/raw/main/xfce4.sh

RUN chmod +x xfce4.sh

RUN sudo ./xfce4.sh

EXPOSE 3390

ENV KALI_USER=${KALI_USER}

ENV KALI_PASSWORD=${KALI_PASSWORD}

RUN useradd -m $KALI_USER && echo "$KALI_USER:$KALI_PASSWORD" | chpasswd

RUN sudo usermod -aG sudo $KALI_USER

CMD sudo /etc/init.d/xrdp start && bash