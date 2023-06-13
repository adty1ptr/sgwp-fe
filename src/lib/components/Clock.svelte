<script>
    import moment from 'moment';
	import { time } from '../../stores';
	
</script>

<div class="flex text-center">
    <span class="font-normal text-xl my-auto">
        {moment($time).format("dddd, DD MMMM YYYY")}
    </span>
    <div class="mx-4 w-1 h-12 bg-black"></div>
    <span class="font-bold text-3xl my-auto">
        {moment($time).format("HH:mm:ss")}
    </span>
</div>