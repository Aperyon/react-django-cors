from rest_framework import serializers

from myapp import models as m


class StuffSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = m.Stuff
        fields = '__all__'
