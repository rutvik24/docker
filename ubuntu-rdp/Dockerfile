# Dockerfile
FROM ubuntu

ARG UBUNTU_USER=root
ARG UBUNTU_PASSWORD=toor

RUN apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget locales

RUN echo "[i] Updating and upgrading ubuntu (this will take a while)"
RUN apt-get update
RUN apt-get full-upgrade -y

RUN echo "[i] Installing Xfce4 & xrdp (this will take a while as well)"
RUN apt-get install -y xfce4 xorg xrdp

RUN echo "[i] Configuring xrdp to listen to port 3390 (but not starting the service)"
RUN sed -i 's/port=3389/port=3390/g' /etc/xrdp/xrdp.ini
RUN sed -i.bak '/fi/a #xrdp multiple users configuration \n xfce-session \n' /etc/xrdp/startwm.sh

EXPOSE 3390

ENV UBUNTU_USER=${UBUNTU_USER}

ENV UBUNTU_PASSWORD=${UBUNTU_PASSWORD}

RUN useradd -m $UBUNTU_USER && echo "$UBUNTU_USER:$UBUNTU_PASSWORD" | chpasswd

RUN usermod -aG sudo $UBUNTU_USER

RUN usermod -aG ssl-cert $UBUNTU_USER

CMD /etc/init.d/xrdp start && bash