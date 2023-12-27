# Dockerfile
FROM kalilinux/kali-rolling

ARG KALI_USER=kali
ARG KALI_PASSWORD=toor

RUN apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget kali-linux-headless

RUN wget https://gitlab.com/kalilinux/recipes/kali-scripts/-/raw/main/xfce4.sh

RUN chmod +x xfce4.sh

RUN sudo ./xfce4.sh

EXPOSE 3390

ENV KALI_USER_ENV=${KALI_USER}

ENV KALI_PASSWORD_ENV=${KALI_PASSWORD}

RUN useradd -m $KALI_USER && echo "$KALI_USER:$KALI_PASSWORD" | chpasswd

RUN sudo usermod -aG sudo $KALI_USER

CMD useradd -m $KALI_USER_ENV && echo "$KALI_USER_ENV:$KALI_PASSWORD_ENV" | chpasswd && sudo usermod -aG sudo $KALI_USER_ENV && sudo /etc/init.d/xrdp start && bash